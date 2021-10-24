const socialMedias = {
  // para costumizar eh so mudar aqui
  github: 'gbsantana',
  youtube: 'channel/UCywLm7N86uIVxu4_eTg2AQA',
  instagram: 'gbsantana._',
  facebook: 'gabriel.santana.378',
  twitter: '_GbSantana'
}

function changeSocialMediasLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${socialMedias[social]}`

    //  alert(li.children[0].href)
  }
}
changeSocialMediasLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${socialMedias.github}`

  fetch(url)
    .then(Response => Response.json()) // pode criar quantos .then quiser, um then pega a resposta do outro
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos()
