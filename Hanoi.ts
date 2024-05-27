function hanoi(diskNum: number, start: number, end: number): void {
  // 1 <= start <= 3
  // 1 <= end <= 3
  // diskNum >= 1

  if (diskNum === 1) {
    /* If there is only one disk on the rod, simply move it to the end. */
    console.log(`${start} -> ${end}`);
  } else {
    const otherRod = 6 - (start + end); // 6 - ( 1 + 3 ) = 2, which is the remaining rod.
    // I  II  III
    // 1
    // 2
    // 3
    // In order to solve it, we need to move the Disk 3 to Rod III first, which requires to move Disk 1 and 2 to Rod 2 First.
    hanoi(diskNum - 1, start, otherRod);
    // I  II  III
    //    
    //    1
    // 3  2
    // Now since Disk 3 is free to move, simply move Disk 3 to Rod III
    console.log(`${start} -> ${end}`);
    // I  II  III
    // 
    //    1
    //    2   3
    // Now we need to move the remaning disk from Rod II to Rod III
    hanoi(diskNum - 1, otherRod, end);
    // I  II  III
    //        1
    //        2
    //        3
    // Boom

  }
}

hanoi(8, 1, 3);