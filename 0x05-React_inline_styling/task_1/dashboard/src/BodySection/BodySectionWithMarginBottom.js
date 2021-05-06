import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css} from 'aphrodite';

class BodySectionWithMarginBottom extends React.Component {
    render () {
        return (
            <div className={css(styles.BodySectionWithMargin)}>
                <BodySection {...this.props} />
            </div>
        );
    }
    
}

BodySection.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
};

BodySection.defaultProps = {
    title: "",
};

const styles = StyleSheet.create({
	BodySectionWithMargin: {
		marginBottom: '40px',
	},
});

export default BodySectionWithMarginBottom;
