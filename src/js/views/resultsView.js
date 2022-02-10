import View from './View';
import previewView from './previewView';
import iconsUrl from '../../img/icons.svg';
const [icons] = iconsUrl.split('?');

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recpies found for your query! Please try again ;)';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
