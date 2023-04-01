import Child from "../Child/Child"
import './mother.css'

export default function Mother() {
    const kids= [
        { name: 'Ori', color: 'red' },
        { name: 'Ron', color: 'blue' },
        { name: 'Sigalit', color: 'green' },
        { name: 'Ruti', color: 'yellow' },
        { name: 'Alon', color: 'purple' },
        ]

    return (
      <div>
        <h1>A Tale of Five Balloons</h1> 
        <table>
            <tr>
                <td><Child children={kids[0].name} style={{backgroundColor:kids[0].color}}/></td>
                <td><Child children={kids[1].name} style={{backgroundColor:kids[1].color}}/></td>
                <td><Child children={kids[2].name} style={{backgroundColor:kids[2].color}}/></td>
                <td><Child children={kids[3].name} style={{backgroundColor:kids[3].color}}/></td>
                <td><Child children={kids[4].name} style={{backgroundColor:kids[4].color}}/></td>
            </tr>
        </table>
      
      </div>
    )
  }