import { connect } from 'react-redux'
import { addTodo } from '../actions'
import TodoFormDialog from '../components/TodoFormDialog';

const mapStateToProps = state => ({
  description: '',
  open: false
})

const mapDispatchToProps = dispatch => ({
  onSubmit: (description) => dispatch(addTodo(description))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoFormDialog)

