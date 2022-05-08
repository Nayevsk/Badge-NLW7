const LinkSocialMedia = {
  github: 'jakeliny',
  instagram: 'jakeliny.gracielly',
  facebook: 'maykbrito',
  twitter: 'jakelinytec',
  youtube: 'jakelinygracielly'
}

function chageSocialMediaLinks() {
  // document.getElementById('userName').textContent = 'Olivia' usar getElementById qnd estiver dentro de uma classe pois se uma id for usada pode-se utilizar apenas o seguiunte comando
  // userName.textContent = 'Pedro'
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinkSocialMedia[social]}`
    //alert(LinkSocialMedia['twitter'])
  }
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinkSocialMedia.github}`

  // A funcao fetch Coleta informacoes completas do api da url.
  // Arrow function "=>", usada para eliminar a necessidade de usar "function nomedafuncao (argumentos){}"
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
//chageSocialMediaLinks()
