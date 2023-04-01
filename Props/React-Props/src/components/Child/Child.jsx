import Balloon from '../Balloon/Balloon';
import './child.css'

export default function Child({style, children}) {
    return (
        <div>
            <table style={{marginLeft:"100px"}}>
                
                <tr><td><h3>{children}</h3></td></tr>
                <tr><td><p><Balloon style={style}></Balloon></p></td></tr>
            </table>
          
          
          
          
        </div>
      );
  }