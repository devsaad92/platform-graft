import axios from 'axios';
import { XMLHttpRequest } from 'xmlhttprequest';

global.XMLHttpRequest = XMLHttpRequest;

describe('user resolvers', () => {
  test('allMedcins', async () => {
    const response2 = await axios.post('http://localhost:8081/graphql', {
      query: `
      mutation {
        login(email: "aaaa@gmail.com", password: "0000") {
          token
          refreshToken
        }
      }
      `,
    });

    const { data: { login: { token, refreshToken } } } = response2.data;

    const response = await axios.post('http://localhost:3000/graphql', {
      query: `
      query {
        allMedcins {
          id
          firstName
          email
        }
      }
      `},
        {
        headers: {
            'x-token': token,
            'x-refresh-token': refreshToken,
        },
    });

    const { data } = response;
    expect(data).toMatchObject({
      data: {
        allMedcins: [],
    },
    });
  });

});
