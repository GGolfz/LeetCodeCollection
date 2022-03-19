class Foo {
    Thread A;
	Thread B;
	Thread C;
    
    public Foo() {
        
    }

    public void first(Runnable printFirst) throws InterruptedException {

		// printFirst.run() outputs "first". Do not change or remove this line.
		A = Thread.currentThread();
		printFirst.run();
	}

	public void second(Runnable printSecond) throws InterruptedException {

		// printSecond.run() outputs "second". Do not change or remove this line.
		B = Thread.currentThread();
		while (A == null) Thread.sleep(1);
		A.join();
		printSecond.run();
	}

	public void third(Runnable printThird) throws InterruptedException {

		// printThird.run() outputs "third". Do not change or remove this line.
		C = Thread.currentThread();
		while (B == null) Thread.sleep(1);
		B.join();
		printThird.run();
	}
}
