const commentsData = [
    {
      id: 1,
      text: "This is the first comment.",
      author: "Alice",
      replies: [
        {
          id: 2,
          text: "This is a reply to the first comment.",
          author: "Bob",
          replies: [
            {
              id: 3,
              text: "This is a nested reply to the reply.",
              author: "Charlie",
              replies: [
                {
                  id: 6,
                  text: "This is a deeper nested reply.",
                  author: "Diana",
                  replies: [],
                },
                {
                  id: 7,
                  text: "Another deep nested reply.",
                  author: "Eve",
                  replies: [],
                },
              ],
            },
          ],
        },
        {
          id: 4,
          text: "Another reply to the first comment.",
          author: "Frank",
          replies: [
            {
              id: 8,
              text: "Nested reply to 'Another reply'.",
              author: "Grace",
              replies: [
                {
                  id: 9,
                  text: "A reply to the nested reply.",
                  author: "Hank",
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 5,
      text: "This is a standalone comment.",
      author: "Ivy",
      replies: [
        {
          id: 10,
          text: "A reply to the standalone comment.",
          author: "Jack",
          replies: [],
        },
      ],
    },
    {
      id: 11,
      text: "Another top-level comment.",
      author: "Karen",
      replies: [
        {
          id: 12,
          text: "Reply to the second top-level comment.",
          author: "Liam",
          replies: [
            {
              id: 13,
              text: "Nested reply to the second top-level comment.",
              author: "Mia",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      id: 14,
      text: "Yet another top-level comment.",
      author: "Noah",
      replies: [],
    },
    {
      id: 15,
      text: "Final top-level comment with many replies.",
      author: "Olivia",
      replies: [
        {
          id: 16,
          text: "First reply to the final comment.",
          author: "Paul",
          replies: [
            {
              id: 17,
              text: "Nested reply to the first reply.",
              author: "Quinn",
              replies: [
                {
                  id: 18,
                  text: "Deep nested reply level 3.",
                  author: "Ruby",
                  replies: [],
                },
              ],
            },
          ],
        },
        {
          id: 19,
          text: "Second reply to the final comment.",
          author: "Sophia",
          replies: [],
        },
        {
          id: 20,
          text: "Third reply to the final comment.",
          author: "Thomas",
          replies: [
            {
              id: 21,
              text: "Nested reply to the third reply.",
              author: "Uma",
              replies: [],
            },
          ],
        },
      ],
    },
  ];
  
  export default commentsData;
  