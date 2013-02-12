var CurrentSection = 0;
var isIE=(navigator.appName.indexOf("Microsoft")!=-1)?1:0;

function VoteArticle(id, blogId)
{
    var cookiename = "voted_article_" + id;
    var voted = GetCookie(cookiename);

    //alert("voting on " + id + " for blog " + blogId);
    //alert("Cookie: " + cookiename + " is " + voted);
    
    if (voted == null)
    {
        //alert("Voted is null");
        var now = new Date();
        var expire = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());
        
        SetCookie(cookiename, '1', expire, '/');
        if (GetCookie(cookiename) == null)
        {
            alert('Please enable cookies in your browser in order to vote an article.');
            return;
        }

        new Ajax.Request ('/ajax/Voting.php', {method: 'post',parameters:  'id=' + id + '&count=' + $('votes_div_'+ id).innerHTML + '&blog_id=' + blogId,onSuccess: DoOk,onFailure: DoFail});

    }
    else
    {
        //alert("Voted is NOT null - means you already voted, i believe");
        $('vmd_' + id).style.display = 'none';
        $('vote_me_div_' + id).style.display = 'none';
        $('votes_div_' +  id).style.display = 'inline';
        
        if ($('votes_div_' + id).innerHTML.indexOf('QJ') == -1)
            $('votes_div_' + id).innerHTML += ' JUMPS';

        if (isDetail)
        {
            $('jVal').style.marginRight = "0px";
        }
        
    }
}

    

function DoOk(response)
{    
    //alert("Doing ok, response is " + response.responseText);
    reply = response.responseText;
    if (reply)
    {
        regExpString = "<voteStatus>(.+?)<\/voteStatus>";

        var myRegExp = new RegExp(regExpString, "g");

        var status = myRegExp.exec(reply);

        if (status[1] == 'ok')
        {
            regExpString = "<articleId>(.+?)<\/articleId>";
            var myRegExp = new RegExp(regExpString, "g");

            var articleId = myRegExp.exec(reply);

            if (articleId[1] > 0)
            {
                $('vmd_' + articleId[1]).style.display = 'none';
                $('vote_me_div_' + articleId[1]).style.display = 'none';

                regExpString = "<voteCount>(.+?)<\/voteCount>";
                var myRegExp = new RegExp(regExpString, "g");
                var votes = myRegExp.exec(reply);
                
                $('votes_div_' + articleId[1]).innerHTML = votes[1].toString() + ' JUMPS';
                    
                $('votes_div_' +  articleId[1]).style.display = 'inline';

                if (isDetail)
                {
                    $('jVal').style.marginRight = "0px";
                }


            }
        }
        else
        {
            regExpString = "<errorMessg>(.+?)<\/errorMessg>";
            myRegExp.compile(regExpString, "g");

            var error = myRegExp.exec(reply);
            if (error[1] == 'voted already')
            {
                regExpString = "<articleId>(.+?)<\/articleId>";
                myRegExp.compile(regExpString, "g");

                var articleId = myRegExp.exec(reply);

                if (articleId[1] > 0)
                {
                    $('vmd_' + articleId[1]).style.display = 'none';
                    $('vote_me_div_' + articleId[1]).style.display = 'none';                        

                    $('votes_div_' +  articleId[1]).style.display = 'inline';
                }
                
                if ($('votes_div_' + articleId[1]).innerHTML.indexOf('QJ') == -1)
                    $('votes_div_' + articleId[1]).innerHTML += ' JUMPS';
                    
                if (isDetail)
                {
                    $('jVal').style.marginRight = "0px";
                }

            }
        }

    }
}

function DoFail(response)
{
}

function GetCookie(sName)
{
    // cookies are separated by semicolons
    var aCookie = document.cookie.split("; ");

    for (var i=0; i < aCookie.length; i++)
    {
        // a name/value pair (a crumb) is separated by an equal sign
        var aCrumb = aCookie[i].split("=");
        if (sName == aCrumb[0])
            return unescape(aCrumb[1]);
    }

    // a cookie with the requested name does not exist
    return null;
}

function SetCookie(name, value, expires, path, domain, secure) {
    document.cookie= name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires.toGMTString() : "") +
        ((path) ? "; path=" + escape(path) : "") +
        ((domain) ? "; domain=" + escape(domain) : "") +
        ((secure) ? "; secure" : "");
}

function UpdateArticles(response)
{
       votes = response.responseText.split("__");

//alert("Updating articles: " + response.responseText);
       
       for(var i = 0; i < ArticlesID.length; i++)
       {
            SetValue(i, votes[i]);

            //alert("Votes: " + votes[i]);
            //alert("Article: " + ArticlesID[i]);            
            
            var voted = GetCookie('voted_article_' + ArticlesID[i]);

            //alert("Voted: " + voted);
            
            if($('votes_div_' +  ArticlesID[i]).innerHTML.indexOf('QJ') == '-1')
                $('votes_div_' +  ArticlesID[i]).innerHTML += ' JUMPS';
            
            if (voted)
            {
                $('vmd_' +  ArticlesID[i]).style.display = 'none';
                
                $('vote_me_div_' +  ArticlesID[i]).style.display = 'none';
                $('votes_div_' +  ArticlesID[i]).style.display = 'inline';
            }
            else
            {
                
                //alert("In here");
                    
                if (isIE)
                {
                    //alert("is ie");
                    $('vmd_' +  ArticlesID[i]).style.display = 'inline';
                    $('vote_me_div_' +  ArticlesID[i]).style.display = 'none';
                }
                else
                {
                    //alert("not ie");
                    $('vote_me_div_' +  ArticlesID[i]).style.display = 'inline';
                    $('vmd_' +  ArticlesID[i]).style.display = 'none';
                }

                //alert("next down");
                
                if (!isDetail)
                {
                    //alert("turning off div");
                    $('votes_div_' +  ArticlesID[i]).style.display = 'inline';
                }
                else
                {
                    if (!isIE)
                    {
                        $('jVal').style.marginTop = "-30px";
                    }

                    //alert("turning on div");
                    $('votes_div_' +  ArticlesID[i]).style.display = 'inline';
                }
//                $('jVal'+ ArticlesID[i]).style.marginRight = "5px";
                
            }

       }

}

function SetValue(i, vote)
{
    var ob;
    var obname = 'votes_div_'+ArticlesID[i];
    
    //alert("setting value index:" + i + "  value: " + vote + "  obname: " + obname);
    
    try
    {
            ob = $(obname);
    } catch (er){ob = null};

    if (ob == null)
    {
        return false;
    }
    else
    {
        ob.innerHTML = parseInt(vote);
    }
}


function UpdateNothing(){}


function FillBookmark(article)
{
    if($('SB_'+article).options.length == 1)
    {
        $('SB_'+article).options.length = 1;
    
        currentoption = 1;
        for(i=0;i<SocialLinks.length;i++)
        {
            opt = new Option(SocialLinks[i][2], SocialLinks[i][0]);
            $('SB_' + article).options[currentoption++] = opt;
        }
    }
}


function FollowBookmark(link, id, title)
{
    var FollowLink = '';

    for(i=0;i<SocialLinks.length;i++)
      {
               if(SocialLinks[i][0] == id)
               {
                          FollowLink = SocialLinks[i][1];
                          break;
               }
      }

      FollowLink = FollowLink.replace('%40%40BOOKMARK_PERMALINK%40%40', escape(escape(link)));
      FollowLink = FollowLink.replace('%40%40BOOKMARK_TITLE%40%40', escape(escape(title)));
      if(FollowLink)
              window.open(unescape(FollowLink), 'NewWindow');
}

