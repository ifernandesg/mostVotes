function findMostPopularFlavor(votes) {
  let counts = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 };

  for (let vote of votes) {
    counts[vote] += 1;
  }

  let mostPopular = null;
  let maxCount = 0;

  for (let flavor in counts) {
    if (counts[flavor] > maxCount || (counts[flavor] === maxCount && mostPopular > flavor)) {
      maxCount = counts[flavor];
      mostPopular = flavor;
    }
  }

  return mostPopular;
}

function validateVotes(votes) {
  const validNumbers = ["0", "1", "2", "3", "4"];
  return votes.every(vote => validNumbers.includes(vote));
}

document.getElementById('submitVotes').addEventListener('click', function () {
  let input = document.getElementById('votesInput').value.trim();

  document.getElementById('result').textContent = '';
  document.getElementById('error').textContent = '';

  if (input === '') {
    document.getElementById('error').textContent = 'Please enter some votes.';
    return;
  }

  let votes = input.split(',');

  if (!validateVotes(votes)) {
    document.getElementById('error').textContent = 'Invalid input! Please use only numbers between 0 and 4.';
    return;
  }

  votes = votes.map(Number);

  let result = findMostPopularFlavor(votes);

  document.getElementById('result').textContent = `The most popular flavor is: ${result}`;
});
