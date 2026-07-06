async function fetchProfileData() {
  const url = 'https://raw.githubusercontent.com/o-Patrick/js-developer-portfolio/self/data/profile.json';
  const response = await fetch(url)
  const profileData = await response.json()

  return profileData
}
