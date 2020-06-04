export const appConfig ={
    appName: "Seller Dashboard",
    webApi:"http://3.17.47.41:9082"
};

/* export const doSomethingWithInput = (theInput) => {
   //Do something with the input
   return theInput;
};
 */

export const userDetails = () => {
   const userData =JSON.parse(localStorage.getItem("userData"));
   
if(userData){
   const user ={
       firstName: userData.firstName,
       lastName: userData.lastName,
       id: userData.userId,
   };
return user;
} else{
    window.location.href="/login";
}
};



