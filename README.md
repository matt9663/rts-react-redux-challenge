# RTS React/Redux Challenge

## Preface
This is my solution repo for the RTS Labs React/Redux Technical Challenge. The core technology is React and it uses Redux for state management. This app was created using the `create-react-app` tool.


## Summary 
This app uses the Hacker News' API to let users search for articles by keyword. The `<SearchBar/>` component handles the user input and makes the appropriate call to the articles endpoint, while saving each search term to Redux state for the duration of the session.

The returned list of articles is saved to Redux state and rendered by the `<ResultsList/>` component.  Clicking an article title in the list opens a new tab leading to the URL of the selected article.