var posts=["2023/12/01/0xGame-2023-web/","2023/10/04/BUUCTF刷题（1）/","2023/10/14/BUUCTF刷题（3）/","2023/10/05/BUUCTF刷题（2）/","2023/04/10/C-课设/","2023/04/07/NewstarCTF-2022misc/","2023/10/17/Golang的一些简单漏洞测试/","2023/04/07/NewstarCTF_2022web/","2023/06/30/Python-web/","2023/06/30/SharkCTF_web/","2023/12/02/cpp数据结构课设/","2023/10/17/Python复习/","2023/09/05/include/","2023/11/07/Java入门/","2023/09/07/preg-replace与代码执行/","2023/10/13/node-js-我直接就是学学学！/","2023/09/08/so绕过disable-function/","2023/04/08/html-css-js学习与实战/","2023/08/06/web入个门/","2023/11/07/web与溯源/","2023/09/21/你也喜欢SQL注入吗？/","2023/09/03/因为羊城杯初赛引起的Linux提权/","2023/11/03/我的小说《又一轮秋》/","2023/10/08/你喜欢的Thinkphp漏洞总结/","2023/10/10/记一次大数据模型开发/","2023/09/10/离散学习/","2023/11/12/远程命令执行漏洞（CVE-2022-22965）/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };