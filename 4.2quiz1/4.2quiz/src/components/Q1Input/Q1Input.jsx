export default function Q1input() {
    return (
        
        <>
            <input style={{float:"left"}} type="range" list="values" value="100"/> <br/>
            <datalist id="values">
                <option value="0" label="0"></option>
                <option value="50" label="50"></option>
                <option value="100" label="100"></option>
            </datalist>
        </>
     
    )
  }