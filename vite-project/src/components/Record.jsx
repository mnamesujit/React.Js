import { useState } from "react";

function Record() {
  // const afterSubmit = (e) => {
  //     window.alert("form Submitted")
  //     console.log("form Submitterd")
  //     e.preventDefault()
  // }
  const [name, setName] = useState("John");
  const [email, setEmail] = useState("John@example.com");
  const [data, setData] = useState([]);
  const Setter = () => {
    setData([...data, { name, email }]);

    setName("");
    setEmail("");
  };

  const fun = (index) => {
    const newArr=[...data]
    console.log(newArr.splice(index,1))
    setData(newArr)

  }
  return (
    <div className="record">
      <h1>Record Form</h1>
      <form
        className="form-data"
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          console.log("form Submittrd");
        }}
      >
        <input
          type="text"
          name=""
          id=""
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name=""
          id=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="button" type="submit" onClick={Setter}>
          Add
        </button>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th style={{width:"30%"}}>Name</th>
            <th style={{width:"50%"}}>Email</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          
          {data.map((ele, index) => {
              if(ele.name && ele.email){
                return (
                  <tr key={index}>
                    {/* <td>{index}</td> */}
                    <td>{ele.name}</td>
                    <td>{ele.email}</td>
                    <td>
                      <button className="close-btn" onClick={()=>fun(index)} >&times;</button>
                    </td>
                  </tr>
                );
              }
            })}

        </tbody>
      </table>
    </div>
  );
}

export default Record;
