//your code here!

document.addEventListener('DOMContentLoaded',()=>{
	const infList = document.querySelector('#infi-list');

	funstion addItems(num){
		for(let i=0; i<num; i++){
			const li = document.createElement('li');
			li.textContent = `Item ${infList.children.length + 1}`;
			infList.appendChild(li);
		}
	}
	addItems(10);

	function handleScroll(){
		const {scrollTop, clientHeight, scrollHeight} = document.documentElement;
		if(scrollTop+clientHeight>= scrollHeight-5){
			addItems(2);
		}
	}
	window.addEventListener('scroll', handleScroll);
});
