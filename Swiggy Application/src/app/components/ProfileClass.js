import {Component} from "react";
import {
  Github_API_User,
  Github_UserName,
  options,
} from "../public/common/constant";
import ProfileRepoClass from "./ProfileRepoClass";
import ProfileUserClass from "./ProfileUserClass";

class Profile extends Component {
  constructor(params) {
    super(params);
    this.state = {
      userInfo: null,
      repeInfo: null,
    };
  }

  async componentDidMount() {
    try {
      const response = await Promise.all([
        fetch(Github_API_User + Github_UserName, options), // Fetch the data from github User API
        fetch(Github_API_User + Github_UserName + "/repos", options), // Fetch the data from github User API for Repository
      ]);

      //   if (!response.ok) {
      //     const error = response.status;
      //     throw new Error("Error: " + error);
      //   }
      const resData = await Promise.all(response.map((r) => r.json()));
      console.log({resData});
      this.setState({
        userInfo: resData[0],
        repoInfo: resData[1],
      });
    } catch (error) {
      console.error(error); // show error in console
    }
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const {userInfo, repoInfo} = this.state; // object destructuring for state data
    return (
      <>
        {userInfo && repoInfo ? (
          <div className="profile-class-container">
            <div className="profile-container">
              <h1 className="profile-title">About Me</h1>
              <ProfileUserClass userInfo={userInfo} />
              {/* Passing props data (full json data) from parent to child */}
            </div>
            <div className="repo-container">
              <h1 className="repo-title">
                Food<span>Fire</span> App Github Repository
              </h1>
              {/* Passing props followers from parent to child */}
              <ProfileRepoClass userInfo={userInfo} repoInfo={repoInfo} />
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default Profile;
