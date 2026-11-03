function agendar(e){
  e.preventDefault();
  const tutor=document.getElementById('nomeTutor').value;
  const pet=document.getElementById('nomePet').value;
  const serv=document.getElementById('servico').value;
  const data=document.getElementById('data').value;
  const hora=document.getElementById('hora').value;
  const whats=document.getElementById('whats').value;
  const msg=`Olá! Quero AGENDAR BANHO 🐶%0A%0ATutor: ${tutor}%0APet: ${pet}%0AServiço: ${serv}%0AData: ${data} às ${hora}%0AWhats: ${whats}`;
  window.open(`https://wa.me/5591985995059?text=${msg}`,'_blank');
  // também salva lead local
  localStorage.setItem('lead-petshop', JSON.stringify({tutor,pet,serv,data,hora,whats,at:Date.now()}));
  alert('Leva você para o WhatsApp para confirmar! 🐾✨');
}
document.getElementById('data').min = new Date().toISOString().split('T')[0];
// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',function(ev){const id=this.getAttribute('href');if(id.length>1){ev.preventDefault();document.querySelector(id)?.scrollIntoView({behavior:'smooth'})}}));
