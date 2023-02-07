import { useEffect, useState } from "react";
import {
  GlobalStyle,
  MainContainer,
  MainHeader,
  User,
  UserDetails,
  UserId,
  UserImage,
  UserName,
  UserScore,
} from "../../Components/styleComponents";
import { randomNum } from "../../Common/calculate"
import usersJson from "../../Data/users.json";
import "./style.css";

// user interface
interface UserObj {
  userID: string;
  displayName: string;
  picture: string;
  score: number;
}

const Home = () => {
  const [users, setUsers] = useState<UserObj[]>(usersJson);

  const sortUserByScore = (a: UserObj, b: UserObj) => {
    if (a.score < b.score) {
      return 1;
    }
    if (a.score > b.score) {
      return -1;
    }
    return 0;
  };

  const handlePointManipulation = () => {
    setUsers((users: UserObj[]) => {
      let updatedUserArr: UserObj[] = users.map((user: UserObj) => {
        user.score += randomNum(1000, 9999);
        return user;
      });
      return updatedUserArr.sort(sortUserByScore);
    });
  };

  useEffect(() => {
    setInterval(() => {
      handlePointManipulation();
    }, 1500);
  }, []);

  const variantHandler = (index: number) => {
    let variant: string = "primary";
    if (index === 0) variant = "danger";
    if (index === 1) variant = "warning";
    return variant;
  };

  return (
    <div className="App">
      <GlobalStyle />
      <MainHeader>Live User Score Chart</MainHeader>
      <MainContainer>
        {users.map(
          ({ displayName, picture, score, userID }: UserObj, index: number) => (
            <User key={userID} top={4 * index}>
              <UserDetails>
                <UserId variant={variantHandler(index)}>{userID}</UserId>
                <UserImage src={picture} />
                <UserName>{displayName}</UserName>
              </UserDetails>
              <UserScore>{score}pt</UserScore>
            </User>
          )
        )}
      </MainContainer>
    </div>
  );
}

export default Home;
