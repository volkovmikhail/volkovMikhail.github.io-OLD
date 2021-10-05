const content = document.querySelector('#content');

async function data(){
   const data = await (await fetch('https://chatik-node.herokuapp.com/messages')).json()

   content.innerHTML = JSON.stringify(data);
}

data()