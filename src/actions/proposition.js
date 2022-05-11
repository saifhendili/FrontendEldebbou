  import axios from 'axios';
  import { SetAlert } from './alert';
  import {
    GET_PROPOSITIONS,
    PROPOSITION_ERROR,
    DELETE_PROPOSITION,
    ADD_PROPOSITION,
    GET_PROPOSITION,
} from './Types';
  
  export const AddProposition = (id,formData) => async (dispatch) => {
  
    try {
      const res = await axios.post(`https://evening-refuge-84655.herokuapp.com/api/propositions/${id}`,
      formData
      
    );
      dispatch({
        type: ADD_PROPOSITION,
        payload: res.data,
      });

    } catch (err) {
      dispatch({
      type: PROPOSITION_ERROR,
        // payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
  
  export const getPropositions = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`https://evening-refuge-84655.herokuapp.com/api/propositions/${id}`);
    
        dispatch({
          type: GET_PROPOSITIONS,
          payload: res.data,
        });
      } catch (err) {
        dispatch({
          type: PROPOSITION_ERROR,
          payload: { msg: err.response.statusText, status: err.response.status },
        });
      }
    };
  
  export const DeleteProposition = (id) => async (dispatch) => {
    try {
        await axios.delete(`https://evening-refuge-84655.herokuapp.com/api/propositions/${id}`);
    
        dispatch({
          type: DELETE_PROPOSITION,
          payload: id,
        });
    
        dispatch(SetAlert('Proposition Removed', 'success'));
      } catch (err) {
      dispatch({
          type: PROPOSITION_ERROR,
          payload: { msg: err.response.statusText, status: err.response.status },
          
      })
    }
  };  