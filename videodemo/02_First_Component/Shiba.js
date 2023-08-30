// function Shiba() {
//   // return <img src="https://66.media.tumblr.com/8844e689de079e6134709eba05acccd1/tumblr_ohtx6cUWOi1voqnhpo5_250.png" />
//   return <p>blah blah blah <p/>
// }



const Sharpei = () => {
  return <img src="https://i.pinimg.com/originals/60/16/ea/6016eaad1a6779310b73cdd002cc974e.jpg" />
}


// const Sharpei = () => {
//   return <img src="https://www.istockphoto.com/photo/cyber-security-ransomware-email-phishing-encrypted-technology-digital-information-gm1420039900-466192785?irgwc=1&cid=IS&utm_medium=affiliate_SP&utm_source=FreeImages&clickid=26T3FZwGNxyPRLiWnRSnyzNyUkFyhvz%3AmWD93o0&utm_term=link&utm_campaign=srp_freephoto_null-inline-popup&utm_content=270498&irpid=246195" />
// }


// const App = () => {
//   return (
//     <div>
//       <Shiba />
//         <Sharpei />
//       <Shiba />
//     </div>
//   )
// }

const App = () => {
  return (
    <div>
        <Sharpei />
    </div>
  )
}

// ReactDOM.render(<Shiba />, document.getElementById("root"))

ReactDOM.render(<App />, document.getElementById("root"))
