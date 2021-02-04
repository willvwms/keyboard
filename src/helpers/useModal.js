import { useState } from 'react';

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);

    function toggle() {
        setIsShowing(!isShowing);
    }

    return {
        isShowing, // state
        toggle, // toggle function for state
    }
};

export default useModal;