import {useState} from 'react'

const RenderList = () => {
    const [list] = useState(["Matheus","Lucas","Joao","Davi"]);

    const [users,setUsers] = useState([
        {id: 1, name: "Matheus", age:31},
        {id: 2, name: "Lucas", age:15},
        {id: 3, name: "Maria", age:33},
    ]);

    const deleteRandom = () =>{
        const randomNumber = Math.floor(Math.random()* 4);

        setUsers((prevUsers)=>{
            console.log();
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    };

  return (
    <div>
        <ul>
            {list.map((item,i)=> (
                <li
                    key={i}>{item}
                </li>
            ))}
            <ul>
                {users.map((user)=> (
                    <li
                        key={user.id}>{user.name} - {user.age}
                    </li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Deletar usuario aleatorio</button>

        </ul>
    </div>
  );
};

export default RenderList;