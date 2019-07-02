import axios from "axios";

const githubUrl = "https://api.github.com/graphql";

const query = `
{
  viewer {
    avatarUrl
    name
    company
    bio
    repositories(last: 5) {
      totalCount
      nodes {
        name
        description
        commitComments {
          totalCount
        }
        stargazers {
          totalCount
        }
      }
    }
    repositoriesContributedTo(last: 5) {
      totalCount
      nodes {
        name
        commitComments {
          totalCount
        }
        stargazers {
          totalCount
        }
      }
    }
  }
}

`;

function queryUserData(oauth) {
  return axios.post(githubUrl, { query: query }, { headers: oauth });
}

export default queryUserData;
