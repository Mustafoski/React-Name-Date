import React, { useState } from 'react';
import Title from './components/Title';

const inputStyle = {
  border: 'none',
  borderBottom: '2px solid #000',
  outline: 'none',
  padding: '.35rem 0',
};

document.body.background = '#eee';

const Signiture = () => {
  const [name, setName] = useState('Your Signiture');
  const [date, setDate] = useState();

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleDateChange = e => {
    setDate(e.target.value);
  };

  return (
    <div className='container text-center'>
      <Title text={name} classes={'title'} />
      <Title text={!date ? 'DoB' : date} classes={'main-title'} />
      <p style={{ marginTop: '5rem' }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi natus
        quae consectetur fugiat eos ipsam aliquam accusamus ullam. Aliquid, unde
        tempora deserunt rerum quos doloribus rem fugiat corporis nihil
        exercitationem. Necessitatibus eligendi vitae pariatur? Nisi dolor
        aperiam sunt in labore reprehenderit, quasi doloremque consequuntur
        asperiores! Dicta, labore architecto hic minima quisquam facere modi,
        nisi dolores veniam numquam aspernatur fugit! Voluptate!
      </p>
      <footer
        className='d-flex'
        style={{
          justifyContent: 'space-around',
          position: 'relative',
          top: '40vh',
        }}
      >
        <input
          type='date'
          value={''}
          style={inputStyle}
          onChange={handleDateChange}
        />
        <input
          type='text'
          value={name}
          style={inputStyle}
          onChange={handleNameChange}
        />
      </footer>
    </div>
  );
};

export default Signiture;
