//declare the function
bool valid_triangle(float x, float y, float z);

//defint the function
bool valid_triangle(float x, float y, float z)
{
	//check for all positive sides
	if (x <= 0 || y <= 0 || z <= 0)
	{
		return False;
	}
	//check that sum of any two sides is greater than third
	if (x + y <= z || x + z <= y || z + y <= x)
	{
		return False;
	}
	//if we passed both tests we are good
	return True;
}
