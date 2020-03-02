import React from 'react';
import './SubscribePage.css';

class SubscribePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: '',
      nameValue: ''
    };
  }

  render() {
    return (
      <form
        action='https://fernroycequilting.us20.list-manage.com/subscribe/post'
        method='POST'
        noValidate
        style={{
          background: '#f8f5f0',
          borderRadius: 2,
          padding: 15,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <input type='hidden' name='u' value='f6c3c615397a5880147bc0b26' />
        <input type='hidden' name='id' value='7e20a83c86' />
        <label htmlFor='MERGE0'>
          Email
        </label>
        <input
          type='email'
          name='EMAIL'
          id='MERGE0'
          value={this.state.emailValue}
          onChange={e => {
            this.setState({ emailValue: e.target.value });
          }}
          autoCapitalize='off'
          autoCorrect='off'
        />
        <label htmlFor='MERGE1'>
          Name
        </label>
        <input
          type='text'
          name='FNAME'
          id='MERGE1'
          value={this.state.nameValue}
          onChange={e => {
            this.setState({ nameValue: e.target.value });
          }}
        />
        <input
          type='submit'
          value='Subscribe'
          name='subscribe'
          id='mc-embedded-subscribe'
          className='subscribe-button'
        />
        <div
          style={{ position: 'absolute', left: '-5000px' }}
          aria-hidden='true'
          aria-label='Please leave the following three fields empty'
        >
          <label htmlFor='b_name'>Name: </label>
          <input
            type='text'
            name='b_name'
            tabIndex='-1'
            value=''
            placeholder='Freddie'
            id='b_name'
          />

          <label htmlFor='b_email'>Email: </label>
          <input
            type='email'
            name='b_email'
            tabIndex='-1'
            value=''
            placeholder='youremail@gmail.com'
            id='b_email'
          />

          <label htmlFor='b_comment'>Comment: </label>
          <textarea
            name='b_comment'
            tabIndex='-1'
            placeholder='Please comment'
            id='b_comment'
          ></textarea>
        </div>
      </form>
    );
  }
}

export default SubscribePage;
