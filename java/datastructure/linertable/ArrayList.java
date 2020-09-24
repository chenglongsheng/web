package com.datastructure.linertable;

public class ArrayList implements List {

	private Object[] elementData;
	private int size;
	
	
	public ArrayList() {
		this(4);
		//elementData=new Object[] {};
	}
	public ArrayList(int initialCapacity) {
		elementData=new Object[initialCapacity];
		//size=0;
	}
	
	
	@Override
	public int size() {
		// TODO Auto-generated method stub
		return size;
	}

	@Override
	public Object get(int i) {
		if(i<0||i>=size) {
			throw new RuntimeException("数组索引越界异常："+i);
		}
		return elementData[i];
	}

	@Override
	public boolean isEmpty() {
		// TODO Auto-generated method stub
		return size==0;
	}

	@Override
	public boolean contains(Object e) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public int indexOf(Object e) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void add(int i, Object e) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void add(Object e) {
		elementData[size]=e;
		size++;
		//elementData[size++]=e;
		
	}

	@Override
	public boolean addBefore(Object obj, Object e) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean addAfter(Object obj, Object e) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Object remove(int i) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean remove(Object e) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Object replace(int i, Object e) {
		// TODO Auto-generated method stub
		return null;
	}

}
