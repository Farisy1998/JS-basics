let i = 1;

while (i <= 10) {
  // if (i === 5) break;
  if (i === 5) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}

// The break statement will breaks out of the loop. And the continue
// Statement will ignore or skip the further statements or codes after the
// continue, and jump to next iteration.
