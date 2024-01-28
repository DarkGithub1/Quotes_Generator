let para=document.querySelector('.main_one_para')
let para2=document.querySelector('.main_one_para_two')
let apiQuotes=[]


//give random quotes form the url

function showQuotes() {
  let quotes=apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  para.textContent=quotes.text
  para2.textContent=`Author is :- ${quotes.author}`
}

//Fetch our data from url
async function name1() {
  const apiUrl='https://jacintodesign.github.io/quotes-api/data/quotes.json';
  try {
    const apiData= await fetch(apiUrl);
    apiQuotes=await apiData.json();
    console.log(apiQuotes);
  } catch (error) {
    console.log(error);
  }
}

name1()
