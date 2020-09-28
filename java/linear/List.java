package com.linear;

public class List<T> extends TSingleLinkedList<T>{



	private Object[] elementData;
	private int size;
	
	
	public void ArrayList() {

		elementData=new Object[] {};
	}
	public void ArrayList(int initialCapacity) {
		elementData=new Object[initialCapacity];

	}
	
	
}