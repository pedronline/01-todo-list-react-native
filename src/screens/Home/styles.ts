import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  hero: {
    marginTop: 24,
    marginLeft: 20,
    marginRight: 20,
  },
  image: {
    alignSelf: 'center',
    marginTop: 30
  },
  form: {
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 56,
    color: '#FFF',
    backgroundColor: '#262626',
    borderRadius: 5,
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clean: {
    color: '#FFF',
    marginTop: 40,
    alignSelf: 'center',
  },
  createdView: {
    marginTop: 20,
    flexDirection: 'row'
  },
  created: {
    color: '#FFF',
    marginRight: 10
  },
  createdNumber: {
    color: '#FFF',
    backgroundColor: '#262626',
    borderRadius: 10,
    paddingRight: 8,
    paddingLeft: 5
  }

})