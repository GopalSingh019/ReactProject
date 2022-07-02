import logo from './logo.svg';
import './App.css';
import { Alert,CardImg, CardGroup, Card, CardTitle, CardText, Button } from 'reactstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setusers] = useState(null);
  // useEffect(() => {
  //   async function getData() {
  //     const response = await fetch(
  //       `http://localhost:8080/welcome`,{mode:'no-cors'}
  //     )

  //     console.log(response)
  //   }
  //   getData()
  // }, [])

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://192.168.0.198:8080/user`
        );
        setusers(response.data);
        //setusers(response.data);
        //setError(null);
      } catch (err) {
        console.log(err);
        //setError(err.message);
        //setData(null);
      } finally {
        console.log("finally");
        //setLoading(false);
      }
    };
    getData();
  }, []);
  //getData();

  console.log(users);
  //users.json().then((data)=>console.log(data));

  return (
    <div>
      <CardGroup>

        {users && users.map((val, key) => {
          return <Card
            body
            inverse
            color="info"
          // style={{
          //   backgroundColor: '#333',
          //   borderColor: '#333'
          // }}
          >
            <CardImg
              alt="Card image cap"
              src="https://picsum.photos/318/180"
              top
              width="100%"
            />
            <CardTitle tag="h2">
              {val.roles[0].role}
            </CardTitle>
            <CardText>
              {val.userName}.
            </CardText>
            <Button>
              SignIn
            </Button>
          </Card>
        })}
      </CardGroup>
    </div>
  );
}

export default App;
