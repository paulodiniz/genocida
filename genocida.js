
const genocidaNickname = ['Presidente Bolsonaro', 'Bolsonaro', 'Jair Bolsonaro', 'Jair Messias Bolsonaro'];
const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a');


const elements = [...document.getElementsByTagName('*')];

elements.forEach((element) => {
  const validNodes = [...element.childNodes].filter(n => n.nodeType === 3);
  validNodes.forEach((node) => {
    const text = node.nodeValue;
    const genocida = text.replace(new RegExp(genocidaNickname.join('|'), 'ig'), 'Genocida');

    if (genocida !== text) {
      node.nodeValue = genocida;
    }
  });
})

