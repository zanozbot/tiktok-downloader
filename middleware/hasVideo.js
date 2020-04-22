export default function ({ store, redirect }) {
  if (!store.state.video) {
    return redirect('/')
  }
}