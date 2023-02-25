import PropTypes from 'prop-types';

function RoomDetail(props) {
  const { room, onClickingDelete, onClickingEdit, onClickingSell } = props;

  return (
    <div className='room-detail'>
      <h1>Room Details</h1>
      <h2>
        {room.name} - {room.origin} - {room.color} - ${room.price} - Stock: {room.stock} left
      </h2>
      {room.stock <= 0 ? (
        <button className='unavailable'>Unavailable</button>
      ) : (
        <button className='room-card-button' onClick={() => onClickingSell(room.id)}>
          Rent Room - {room.stock} left
        </button>
      )}
      <button className='room-card-button' onClick={onClickingEdit}>
        Edit Room
      </button>
      <button className='room-card-button' onClick={() => onClickingDelete(room.id)}>
        Remove Room
      </button>
      <p>{room.description}</p>
      <p></p>
    </div>
  );
}

RoomDetail.propTypes = {
  room: PropTypes.object,
  onClickDelete: PropTypes.func,
  onClickEdit: PropTypes.func,
  onClickSell: PropTypes.func,
};

export default RoomDetail;
