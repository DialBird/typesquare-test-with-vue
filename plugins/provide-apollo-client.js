import { DefaultApolloClient } from '@vue/apollo-composable'
import { provide } from '@nuxtjs/composition-api'
import ApolloClient from 'apollo-boost'

const apolloClient = new ApolloClient({
  uri: 'https://hidden-coast-hasura.herokuapp.com/v1/graphql',
})
export default function ({ app }) {
  app.setup = () => {
    provide(DefaultApolloClient, apolloClient)
  }
}
