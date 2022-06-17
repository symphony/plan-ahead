import 'components/styles/Assignment.scss';
import Form from './Form';
import StatusForm from './StatusForm';
import { format, parseISO } from 'date-fns';

const AssignmentView = (props) => {
  const dueDateColour = () => {
    if (parseISO(props.assigned.dueDate) < new Date()) return 'pastDue';
    return 'due';
  };

  return (
    <div className='index_content'>
      <div className='cancel-X' onClick={props.onBack}>&#10006;</div>
      {props.status && <div>
        <header><h1 className={`assignment_header ${props.status.toLowerCase().replace(/\s+/g, '')}`}>
          {props.title}
        </h1></header >
        <p className='assn-subj'>{props.subject.name}</p>
        <p className={`assn-desc ${props.status.toLowerCase().replace(/\s+/g, '')}`}>Description:</p>
        <p className='desc'>{props.description}</p>
        <p className='assn-link'><a href={props.url}>Link to Google Classroom</a></p>
        <p className={`due-date ${dueDateColour()}`}>Due: {format(props.day || parseISO(props.assigned.dueDate), 'MMM dd yyyy')}</p>
        <p className='assn-prog'>Your Progress:&nbsp;&nbsp;<span className='prog-status'> {props.status}!
        </span></p>
      </div >}

      {(props.view !== 'complete') && <StatusForm {...props} />}
      {props.admin && <Form {...props} />}
    </div >
  );
};

export default AssignmentView;