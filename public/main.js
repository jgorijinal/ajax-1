
getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onreadystatechange = () => {
    //下载完成,但不知道成功 2xx ,还是失败 4xx 5xx
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const style = document.createElement("style"); //创建style标签
        style.innerHTML = request.response; //填写style内容
        document.head.appendChild(style); //查到 head 里面
      } else {
        alert("加载 CSS 失败");
      }
    }
  };
  request.send();
};

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onload = () => {
    const script = document.createElement("script");
    script.innerHTML = request.response;
    document.head.appendChild(script);
  };
  request.onerror = () => {};
  request.send();
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onload = () => {
    const div = document.createElement("div");
    div.innerHTML = request.response;
    document.body.appendChild(div);
  };
  request.onerror = () => {};
  request.send();
};

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status >= 200) {
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text.trim());
    }
  };
  request.send()
};
getJSON.onclick = ()=>{
  const request = new XMLHttpRequest()
  request.open('GET','/5.json')
  request.onreadystatechange = ()=>{
    if(request.readyState === 4 && request.status === 200){
      console.log(request.response)
      const object = JSON.parse(request.response) //字符串改成对象
      myName.textContent = object.name  //span里面写内容
    }
  }
  request.send()
}

n = 2
getPage.onclick =()=>{
  const request = new XMLHttpRequest()
  request.open('GET',`/page${n}`)
  request.onreadystatechange = ()=>{if(request.readyState ===4 && request.status === 200){
    console.log(request.response)
    const array = JSON.parse(request.response)
    array.forEach(item => {
      const li = document.createElement('li')
      li.textContent = item.id
      console.log(li)
      xxx.appendChild(li)
    });
    n += 1
  }
}
  request.send()
}
