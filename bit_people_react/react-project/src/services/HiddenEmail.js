const formatEmail = (str) => {

    const first = str.slice(0, 3) + "...";
  
    const second = str.indexOf("@");
    const third = str.slice(second-3, second);
    const fourth = str.slice(second)
    return `${first}${third}${fourth}`
  
  
  }

  export default formatEmail;