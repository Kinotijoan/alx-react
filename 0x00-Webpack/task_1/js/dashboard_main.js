import $ from 'jquery';
import _ from 'lodash';

$(document).ready(function () {
  const container = $('<div></div>');
  const paragraph1 = $('<p>Holberton Dashboard</p>');
  const paragraph2 = $('<p>Dashboard data for the students</p>');
  const button = $('<button>Click here to get started</button>');
  const countParagraph = $('<p id="count"></p>');
  const paragraph3 = $('<p>Copyright - Holberton School</p>');

  container.append(paragraph1, paragraph2, button, countParagraph, paragraph3);
  $('body').append(container);

  let count = 0;

  function updateCounter() {
    count++;
    $('#count').text(count + ' clicks on the button');
  }

  const debouncedUpdateCounter = _.debounce(updateCounter, 1000);

  button.on('click', debouncedUpdateCounter);
});
