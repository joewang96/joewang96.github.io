import React from 'react';
import NotFound from '../containers/NotFound';

export default Wrapped =>
  class PrismicPageV2 extends React.Component {
    state = {
      doc: null,
      err: null,
    };

    componentWillMount() {
      this.fetchPage(this.props);
    }

    componentWillReceiveProps(props) {
      this.fetchPage(props);
    }

    fetchPage = props => {
      if (props.prismicCtx) {
        props.prismicCtx.api.getByUID(
          Wrapped.pageType,
          this.props.uid || this.props.match.params.uid,
          {},
          (err, doc) => {
            if (err) {
              this.setState(() => ({ err }));
            } else if (doc) {
              this.setState(() => ({ doc }));
            }
          }
        );
      }
    };

    render() {
      return this.state.doc ? (
        // TODO: have this automatically create the header/footer
        <Wrapped
          api={this.props.prismicCtx && this.props.prismicCtx.api}
          doc={this.state.doc}
        />
      ) : // TODO: add better loading state
      this.state.err ? (
        <NotFound />
      ) : null;
    }
  };
