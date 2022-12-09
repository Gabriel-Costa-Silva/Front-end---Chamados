
async function EsqueciMinhaSenha(){
const { value: email } = await Swal.fire({
    title: 'Input email address',
    input: 'email',
    inputLabel: 'Your email address',
    inputPlaceholder: 'Enter your email address'
  })
  
  if (email) {
    Swal.fire(`Entered email: ${email}`)
  }
}

function showHelp(){
    Swal.fire({
        title: 'Ajuda Bradesco',
        text: 'Para utilizar o nosso sistema de chamados, utilize esta página para criar ou ver um ou mais chamado(s) pendente(s)',
        icon: 'OK',
        confirmButtonText: 'OK'
      })

}
async function CriarChamado(){
  Swal.fire({
      title: 'Criar novo chamado',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true,
      html:
        '<input id="id" type="hidden" >' +
        '<br><br><label >Título:'+ '</label><br> ' +
        '<input id="editNome" class="swal2-input" placeholder="Título do chamado" >' +
        '<br><br><label >Descrição:'+ '</label><br> ' +
        '<input id="editEmail" placeholder="Descreva o seu chamado" class="swal2-input style="height:500px width:500px"></textarea>'+
        '<br><br><label >Situação:'+ '</label><br> ' +
        '<input id="editCel" class="swal2-input" placeholder="Urgente">' +
        '<br><br><label >Tipo de solicitação:'+ '</label><br> ' +
        '<input id="editWebsite" class="swal2-input" placeholder="Infraestrutura" >',

      focusConfirm: false,
      preConfirm: () => {
        var NomePat = document.getElementById('editNome').value;
        var Email = document.getElementById('editEmail').value;
        var Website = document.getElementById('editWebsite').value;
        var Celular = document.getElementById('editCel').value;
        if( !NomePat || !Email  || !Website || !Celular ) {
          Swal.fire('Preencha todos os campos!');
         }
         else {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Seu chamado foi criado com sucesso',
            showConfirmButton: false,
            timer: 1500
          })
          close;
         }
      }
    })
}

async function editarChamado(){
    Swal.fire({
        title: 'Editar chamado',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true,
        html:
          '<input id="id" type="hidden" >' +
          '<br><br><label >Título:'+ '</label><br> ' +
          '<input id="editNome" class="swal2-input" placeholder="Título do chamado" >' +
          '<br><br><label >Descrição:'+ '</label><br> ' +
          '<input id="editEmail" placeholder="Descreva o seu chamado" class="swal2-input style="height:500px width:500px"></textarea>'+
          '<br><br><label >Situação:'+ '</label><br> ' +
          '<input id="editCel" class="swal2-input" placeholder="Urgente">' +
          '<br><br><label >Tipo de solicitação:'+ '</label><br> ' +
          '<input id="editWebsite" class="swal2-input" placeholder="Infraestrutura" >',

        focusConfirm: false,
        preConfirm: () => {
          var NomePat = document.getElementById('editNome').value;
          var Email = document.getElementById('editEmail').value;
          var Website = document.getElementById('editWebsite').value;
          var Celular = document.getElementById('editCel').value;
          if( !NomePat || !Email  || !Website || !Celular ) {
            Swal.fire('Preencha todos os campos!');
           }
           else {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Seu chamado foi editado com sucesso',
              showConfirmButton: false,
              timer: 1500
            })
            close;
           }
        }
      })
}

function quemSomos(){
Swal.fire({
  icon: 'question',
  title: 'Quem somos',
  html: '<h3>INTEGRANTES DO GRUPO: </h3><br><p>Anselmo Alves Martins</p><br><p>Gabriel da Costa Silva</p><br><p>Juvenal João de Lira Filho</p><br><p>Vitor Itiro Oki Takahashi</p><br><p>Vinicius de Moraes Pacheco</p><br>',
  footer: '<a href="https://banco.bradesco/html/classic/sobre/">Ir para Bradesco S/A</a>'
})
}