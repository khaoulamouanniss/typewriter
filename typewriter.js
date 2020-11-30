const sentence = "hello there from lighthouse labs \n";
time = 0;
for (const char of sentence) {
  setTimeout(function(){process.stdout.write(char);}, time + 50);
  time += 50;
}

