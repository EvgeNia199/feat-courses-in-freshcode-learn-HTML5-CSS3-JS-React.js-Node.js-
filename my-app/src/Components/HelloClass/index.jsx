import React, { Component } from 'react'


// export default class HelloClass extends Component {
//   render() {
//     return (
//       <div>HelloClass </div>
//     )
//   }
// }

//2

// export default class HelloClass extends Component {
//     constructor(props){
//       super(props);
//     }
//     render() {
//       const {name, surname} = this.props;
//       return (
//           <>
//               <p>Hello, {name} {surname}!</p>
//           </>
//       )
//     }
//   }

// export default class HelloClass extends Component {
//   constructor(props){
//     super(props);
//   }
//   render() {
//     const {name, surname, isHelloMode} = this.props;
//     return (
//         <>
//             <p>
//               {isHelloMode ? 'Hello' : 'Bye'}
//               , {name} {surname}!</p>
//         </>
//     )
//   }
// }


export default class HelloClass extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const {name, surname, isHelloMode} = this.props;
    return (
        <>
            <p>
              {isHelloMode ? 'Hello' : 'Bye'}
              , {name} {surname}!</p>
        </>
    )
  }
}