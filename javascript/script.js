function tabs (){
  const tabsItem = [];
  const contentTabs = [];
  const btns = document.getElementById('tabs');
  const tab1 = document.getElementById('tab1');
  const tab2 = document.getElementById('tab2');
  const content1 = document.getElementById('tab1--content');
  const content2 = document.getElementById('tab2--content');
  tabsItem.push(tab1,tab2);
  contentTabs.push(content1, content2);
  function showContent (e){
    if (e.target.classList.contains('tab--btn')){
      const i = tabsItem.indexOf(e.target);
      tabsItem.map(item => item.classList.remove('active'));
      tabsItem[i].classList.add('active');
      
      contentTabs.map(content => content.classList.remove('active'));
      contentTabs.map(content => content.classList.add('off'));
      contentTabs[i].classList.remove('off');
      contentTabs[i].classList.add('active');
    }
  }
  btns.addEventListener('click', showContent);
}tabs();   
