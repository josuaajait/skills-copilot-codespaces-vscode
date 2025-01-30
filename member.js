function skillsMember() {
  // skills
  const skills = document.querySelectorAll('.skills');
  skills.forEach(skill => {
    const skillValue = skill.dataset.skillValue;
    skill.style.width = skillValue + '%';
  });

  // member
  const member = document.querySelectorAll('.member');
  member.forEach(member => {
    member.addEventListener('click', () => {
      member.classList.toggle('active');
    });
  });
}